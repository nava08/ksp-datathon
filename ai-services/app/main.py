from fastapi import FastAPI

app = FastAPI(title="KSP InsightX AI Services")


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok", "service": "ksp-insightx-ai-services"}
