# Day 1
# Developer Devashish Sharma
# Python Program to build a decimal to binary conversion using a user defined function
# METHOD 1
print("METHOD 1")
def decimalToBinary(num):
    if num > 1:
        decimalToBinary(num // 2)
    print(num % 2, end = '')
number = int(input("Enter the decimal number: "))

#main() function
decimalToBinary(number)
#----------------------------------------------------------------------------------------------

# Python program to convert the given decimal number to binary using a built-in function
# METHOD 2
print("\n----------------------------\nMETHOD 2")
number = int(input("\nEnter the decimal number: "))
print(bin(number))