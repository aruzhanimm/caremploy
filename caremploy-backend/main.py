from fastapi import FastAPI, UploadFile, File, HTTPException, status
from pydantic import BaseModel
from typing import List
import numpy as np
from pymongo import MongoClient
from passlib.context import CryptContext

# Заглушки для ИИ-библиотек (в реальном проекте здесь инициализация LangChain и ChromaDB)
# import chromadb
# from langchain.llms import OpenAI
# from langchain.embeddings import OpenAIEmbeddings

app = FastAPI(title="Caremploy AI Backend")

# --- Настройка MongoDB ---
# В идеале URI должен лежать в .env (например: os.getenv("MONGO_URI"))
MONGO_URI = "mongodb+srv://caremploy:Ffhefhe@cluster0.fwva0yh.mongodb.net/?appName=Cluster0"
client = MongoClient(MONGO_URI)
db = client.caremploy_db  # Создаем/выбираем базу данных
users_collection = db.users  # Коллекция пользователей

# Настройка хэширования паролей
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


# --- Модели данных (Pydantic) ---
class UserAuth(BaseModel):
    email: str
    password: str


class JobMatchRequest(BaseModel):
    resume_text: str


class JobVacancy(BaseModel):
    id: str
    title: str
    company: str
    match_score: float
    why_you: str


class InterviewMessage(BaseModel):
    user_message: str
    history: List[str]


# --- Имитация базы данных стажировок ---
MOCK_VACANCIES = [
    {"id": "1", "title": "Junior Python/RAG Engineer", "company": "TechData AI Hub", "vector": [0.8, 0.9, 0.2]},
    {"id": "2", "title": "Junior Backend Dev (FastAPI)", "company": "FinTech KZ", "vector": [0.7, 0.5, 0.6]},
    {"id": "3", "title": "Smart Contract Dev", "company": "DeFi Startup", "vector": [0.1, 0.2, 0.9]}
]


# --- Эндпоинты Авторизации (MongoDB) ---
@app.post("/api/auth/register")
async def register_user(user: UserAuth):
    # Проверяем, есть ли уже такой email
    if users_collection.find_one({"email": user.email}):
        raise HTTPException(status_code=400, detail="Email уже зарегистрирован")

    # Хэшируем пароль и сохраняем в базу
    hashed_password = pwd_context.hash(user.password)
    new_user = {
        "email": user.email,
        "password": hashed_password,
        "role": "student"
    }
    users_collection.insert_one(new_user)
    return {"message": "Пользователь успешно зарегистрирован!"}


@app.post("/api/auth/login")
async def login_user(user: UserAuth):
    db_user = users_collection.find_one({"email": user.email})

    # Проверяем email и правильность пароля
    if not db_user or not pwd_context.verify(user.password, db_user["password"]):
        raise HTTPException(status_code=401, detail="Неверный email или пароль")

    return {
        "message": "Успешный вход!",
        "user": {"email": db_user["email"], "role": db_user["role"]}
    }


# --- Эндпоинт 1: Парсинг и оценка резюме (AI Resume Architect) ---
@app.post("/api/resume/analyze")
async def analyze_resume(file: UploadFile = File(...)):
    # В реальности здесь LangChain с PyPDFLoader читает файл
    content = await file.read()

    # Имитация ответа от LLM после анализа
    return {
        "filename": file.filename,
        "ats_score": 68,
        "skills_gap": ["FastAPI", "PostgreSQL", "Docker"],
        "smart_fixes": [
            {
                "original": "Делала бота, который отвечает на вопросы...",
                "suggestion": "Спроектировала и внедрила RAG-систему на Python для автоматизированного анализа документов..."
            }
        ]
    }


# --- Эндпоинт 2: RAG Мэтчинг (Smart Job Matcher) ---
def cosine_similarity(v1, v2):
    """Математика для ранжирования: скалярное произведение деленное на произведение длин векторов"""
    dot_product = np.dot(v1, v2)
    norm_a = np.linalg.norm(v1)
    norm_b = np.linalg.norm(v2)
    return dot_product / (norm_a * norm_b)


@app.post("/api/jobs/match", response_model=List[JobVacancy])
async def match_jobs(request: JobMatchRequest):
    # 1. Превращаем резюме студента в вектор (Embedding)
    # student_vector = embeddings_model.embed_query(request.resume_text)
    student_vector = [0.85, 0.8, 0.15]  # Имитация вектора (сильный Python/RAG)

    results = []
    # 2. Ищем косинусное сходство с вакансиями в базе (ChromaDB делает это под капотом)
    for vac in MOCK_VACANCIES:
        sim_score = cosine_similarity(student_vector, vac["vector"])

        # 3. LLM генерирует блок "Why you?" на основе совпадений
        why_you_text = f"Твой опыт отлично подходит под наши задачи. Совпадение профиля: {int(sim_score * 100)}%."
        if "RAG" in vac["title"]:
            why_you_text = "Твой опыт разработки RAG-систем идеально закрывает наши задачи по работе с векторными базами."

        results.append(
            JobVacancy(
                id=vac["id"],
                title=vac["title"],
                company=vac["company"],
                match_score=round(sim_score * 100, 1),
                why_you=why_you_text
            )
        )

    # Сортируем по убыванию % совпадения
    results.sort(key=lambda x: x.match_score, reverse=True)
    return results[:3]


# --- Эндпоинт 3: Симулятор собеседования (Interview Simulator) ---
@app.post("/api/interview/chat")
async def interview_chat(request: InterviewMessage):
    # Здесь LLM с системным промптом "Ты злой Senior Tech Lead..."
    # llm.predict(f"Контекст: {request.history}. Юзер ответил: {request.user_message}. Задай следующий вопрос.")

    # Имитация ответа ИИ и анализа по STAR
    return {
        "ai_response": "Хорошо, ситуацию я понял. А какой именно алгоритм чанкинга ты использовала для разбивки длинных текстов?",
        "live_analysis": {
            "is_star_method": True,
            "current_stage": "Action",
            "tip": "Ты отлично описала Situation. Теперь детально расскажи про Action (Действие)."
        }
    }
