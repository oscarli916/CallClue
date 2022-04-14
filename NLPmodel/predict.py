import tensorflow as tf
import tensorflow_hub as hub
import tensorflow_text as text
from numpy import argmax

labels = ['Loans', 'Credit card', 'Promotion Campaign', 'Account Balance', 'E-banking','FX', 'Mortgages', 'Insurance', 'Transfer Services']

def predict(text):
    nlp_model = tf.keras.models.load_model(('nlp.h5'),custom_objects={'KerasLayer':hub.KerasLayer}, compile=False)

    return labels[argmax(nlp_model.predict([text]))]