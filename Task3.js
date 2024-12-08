let number = prompt("Enter number");

for(i = 1; i <= number; i++)
{
    if(number % i === 0)
    {
        document.write(i);
    }
}