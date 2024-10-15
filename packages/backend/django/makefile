OS := $(shell uname)

PIP_CMD = pip3

ifeq ($(OS), Linux)
    PIP_CMD = pip3
endif

ifeq ($(OS), Darwin) 
    PIP_CMD = pip3
endif

# For Windows
ifeq ($(OS), Windows_NT)
    PIP_CMD = pip
endif

install:
	$(PIP_CMD) install -r requirements.txt