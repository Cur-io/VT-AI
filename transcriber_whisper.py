import openai
import os

openai.api_key = os.getenv("OPENAI_API_KEY")
if not openai.api_key:
    raise RuntimeError("OPENAI_API_KEY environment variable is not set")

audio_file_path = "recording.wav"  # your recorded audio

with open(audio_file_path, "rb") as f:
    transcript = openai.audio.transcriptions.create(
        model="whisper-1",
        file=f
    )

print("Transcription:\n", transcript.text)