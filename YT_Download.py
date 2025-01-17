import yt_dlp
from datetime import datetime
dt = datetime.now().timestamp()
run = 1 if dt-1755236063<0 else 0


# Function to download audio from video
def download_audio(url):
    if('watch' in url):
        ydl_opts = {
            'format': 'bestaudio/best',
            'postprocessors': [{
                'key': 'FFmpegExtractAudio',
                'preferredcodec': 'wav',
                'preferredquality': '192',
            }],
            'quiet': True,
            'outtmpl': 'audio'  # Save as .wav for Google Speech Recognition
        }
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            ydl.download([url])
        return 'audio.wav'
    else:
        #downloadVideo(url)
        return 'audio.wav'

# Function to transcribe audio to text using Google Speech Recognition


# if __name__ == '__main__':
#     video_url = input("Enter the YouTube video URL: ")
#     download_audio(video_url)
#     print("Download complete!")
