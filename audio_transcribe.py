
import speech_recognition as sr

def transcribe_audio(audio_file):
    audio = sr.AudioFile(audio_file)
    recognizer = sr.Recognizer()
    transcript = ""

    with audio as source:
        audio_duration = source.DURATION
        step = 30  # Break into 30-second chunks
        for i in range(0, int(audio_duration), step):
            audio_chunk = recognizer.record(source, duration=step)
            try:
                transcript += recognizer.recognize_google(audio_chunk)
            except sr.UnknownValueError:
                pass  # Ignore unintelligible chunks
    return transcript