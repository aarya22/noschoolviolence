import glob
import os
import string
import sys

import gensim
from gensim import corpora
from nltk.corpus import stopwords
from nltk.stem.wordnet import WordNetLemmatizer

reload(sys)  
sys.setdefaultencoding('utf8')

data_path = 'toy_data/*.txt'
files = glob.glob(data_path)

doc_complete = []
for filename in files:
    with open(filename) as f:
        text = f.read()
        doc_complete.append(text)

#print(doc_complete[:1])

stop = set(stopwords.words('english'))
exclude = set(string.punctuation) 
lemma = WordNetLemmatizer()

# remove stop words and punctuation, and lemmatize words
def clean(doc):
    count = 0
    stop_free = " ".join([i for i in doc.lower().split() if i not in stop])
    punc_free = ''.join(ch for ch in stop_free if ch not in exclude)
    normalized = []
    for word in punc_free.split():
        count = count + 1    
        try:
            word = lemma.lemmatize(word)
            normalized.append(word)
        except:
            pass
        if count % 10000 == 0: print(count)
    return ' '.join(normalized)

doc_clean = [clean(doc).split() for doc in doc_complete]
print(doc_clean)

#doc_clean = [clean(doc) for doc in doc_complete]
dictionary = corpora.Dictionary(doc_clean)

doc_term_matrix = [dictionary.doc2bow(doc) for doc in doc_clean]

# print(doc_clean[:1])

Lda = gensim.models.ldamodel.LdaModel

ldamodel = Lda(doc_term_matrix, num_topics=3, id2word=dictionary, passes=50)

print(ldamodel.print_topics(num_topics = 3))