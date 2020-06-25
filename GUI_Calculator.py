from tkinter import *

root = Tk()
root.title("Simple Calculator")

e = Entry(root, width=35, borderwidth=5)
e.grid(row=0, column=0, columnspan=3, padx=10, pady=10)


def calculate(number):
    current = e.get()
    e.delete(0, END)
    e.insert(0, str(current) + str(number))


def clears():
    e.delete(0, END)


def add():
    first_no = e.get()
    global f_num
    global math
    math = "addition"
    f_num = int(first_no)
    e.delete(0, END)


def subtract():
    first_no = e.get()
    global f_num
    global math
    math = "subtraction"
    f_num = int(first_no)
    e.delete(0, END)


def multiply():
    first_no = e.get()
    global f_num
    global math
    math = "multiplication"
    f_num = int(first_no)
    e.delete(0, END)


def division():
    first_no = e.get()
    global f_num
    global math
    math = "division"
    f_num = int(first_no)
    e.delete(0, END)


def result():
    second_no = e.get()
    e.delete(0, END)

    if math == "addition":
        e.insert(0, f_num + int(second_no))
    if math == "subtraction":
        e.insert(0, f_num - int(second_no))
    if math == "multiplication":
        e.insert(0, f_num * int(second_no))
    if math == "division":
        e.insert(0, f_num / int(second_no))


button1 = Button(root, text="1", padx=40, pady=20, command=lambda: calculate(1))
button2 = Button(root, text="2", padx=40, pady=20, command=lambda: calculate(2))
button3 = Button(root, text="3", padx=40, pady=20, command=lambda: calculate(3))
button4 = Button(root, text="4", padx=40, pady=20, command=lambda: calculate(4))
button5 = Button(root, text="5", padx=40, pady=20, command=lambda: calculate(5))
button6 = Button(root, text="6", padx=40, pady=20, command=lambda: calculate(6))
button7 = Button(root, text="7", padx=40, pady=20, command=lambda: calculate(7))
button8 = Button(root, text="8", padx=40, pady=20, command=lambda: calculate(8))
button9 = Button(root, text="9", padx=40, pady=20, command=lambda: calculate(9))
button0 = Button(root, text="0", padx=40, pady=20, command=lambda: calculate(0))
buttonAdd = Button(root, text="+", padx=39, pady=20, command=add)
buttonEqual = Button(root, text="=", padx=91, pady=20, command=result)
buttonClear = Button(root, text="Clear", padx=79, pady=20, command=clears)

buttonSubtract = Button(root, text="-", padx=41, pady=20, command=subtract)
buttonMultiply = Button(root, text="*", padx=40, pady=20, command=multiply)
buttonDivision = Button(root, text="/", padx=41, pady=20, command=division)

button1.grid(row=3, column=0)
button2.grid(row=3, column=1)
button3.grid(row=3, column=2)

button4.grid(row=2, column=0)
button5.grid(row=2, column=1)
button6.grid(row=2, column=2)

button7.grid(row=1, column=0)
button8.grid(row=1, column=1)
button9.grid(row=1, column=2)

button0.grid(row=4, column=0)
buttonClear.grid(row=4, column=1, columnspan=2)
buttonAdd.grid(row=5, column=0)
buttonEqual.grid(row=5, column=1, columnspan=2)

buttonSubtract.grid(row=6, column=0)
buttonMultiply.grid(row=6, column=1)
buttonDivision.grid(row=6, column=2)

root.mainloop()
