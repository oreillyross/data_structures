num = int(input("Enter a number: "))

for i in range(2, num // 2):
  if num % i == 0:
    print(f"{num} is not prime")
    break
  else:
    print(f'{num} is prime')