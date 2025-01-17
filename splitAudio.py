from pydub import AudioSegment
from pydub.silence import split_on_silence

def split_audio(file_path, min_silence_len=1000, silence_thresh=-40):
                audio = AudioSegment.from_file(file_path)
                chunks = split_on_silence(audio, min_silence_len=min_silence_len, silence_thresh=silence_thresh)
                chunk_paths = []
                for i, chunk in enumerate(chunks):
                    chunk_path = f"chunk_{i}.wav"
                    chunk.export(chunk_path, format="wav")
                    chunk_paths.append(chunk_path)
                return chunk_paths