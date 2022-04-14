import speech_recognition as sr

def speech_recogn(file_path):
    # use the audio file as the audio source
    r = sr.Recognizer()
    with sr.AudioFile(file_path) as source:
        audio = r.record(source)  # read the entire audio file

    # recognize speech using Google Speech Recognition
    try:
        # for testing purposes, we're just using the default API key
        # to use another API key, use `r.recognize_google(audio, key="GOOGLE_SPEECH_RECOGNITION_API_KEY")`
        # instead of `r.recognize_google(audio)`
        return r.recognize_google(audio, language='yue')
    except sr.UnknownValueError:
        print("Google Speech Recognition could not understand audio")
    except sr.RequestError as e:
        print("Could not request results from Google Speech Recognition service; {0}".format(e))

    # recognize speech using Google Cloud Speech
    #
    # with open ('google_key.json', 'r') as file:
    #     credential = file.read ()
    #
    # try:
    #     return r.recognize_google_cloud(audio, language='yue', credentials_json=credential)
    # except sr.UnknownValueError:
    #     print("Google Cloud Speech could not understand audio")
    # except sr.RequestError as e:
    #     print("Could not request results from Google Cloud Speech service; {0}".format(e))