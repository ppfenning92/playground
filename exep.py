class CustomException(Exception):
    pass


def func():

    try:
        raise CustomException("func")
    except CustomException as ce:
        print(ce)
    except Exception as e:
        print("from func")


def main():

    try:
        func()
    except Exception as e:
        print("from main")


if __name__ == "__main__":
    main()
