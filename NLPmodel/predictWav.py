from speechRecogn import speech_recogn
from predict import predict
from os import path


AUDIO_FILE = path.join(path.dirname(path.realpath(__file__)), "2.wav")

text_input = speech_recogn(AUDIO_FILE)

print(predict(text_input))