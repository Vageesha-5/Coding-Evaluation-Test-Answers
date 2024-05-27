#Write Python code to calculate the factorial of a non-negative integer without using a function.

nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
nums2 = list(filter(lambda x: x % 2 == 0, nums))

print(nums2)  
n = 5 
result = 1
for i in range(1, n + 1):
    result *= i
print(f"The factorial of {n} is {result}")  