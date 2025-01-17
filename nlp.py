import spacy

# Load spaCy model
nlp = spacy.load("en_core_web_sm")

# Load finance-related keywords from a file
def load_keywords(filepath):
    with open(filepath, 'r') as file:
        keywords = {line.strip().lower() for line in file if line.strip()}
    return keywords

# Path to the keywords file
KEYWORDS_FILE = "finance_keywords.txt"

# Load keywords into a set
FINANCE_KEYWORDS = load_keywords(KEYWORDS_FILE)

# Extract keywords using spaCy
def extract_keywords(text):
    doc = nlp(text)
    keywords = {token.text.lower() for token in doc if token.is_alpha and not token.is_stop}
    return keywords

# Check if the video is finance-related
def is_finance_related(text):
    keywords = extract_keywords(text)
    overlap = keywords.intersection(FINANCE_KEYWORDS)
    return len(overlap) > 0
