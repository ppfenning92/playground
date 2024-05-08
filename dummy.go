package main

import (
	"fmt"
	"math"
	"strings"
)

type Toolbox struct {
	data string
}

// Method 1: Calculate the square of an integer
func (t *Toolbox) Square(num int) int {
	return num * num
}

// Method 2: Check if a number is prime
func (t *Toolbox) IsPrime(num int) bool {
	if num <= 1 {
		return false
	}
	for i := 2; i <= int(math.Sqrt(float64(num))); i++ {
		if num%i == 0 {
			return false
		}
	}
	return true
}

// Method 3: Reverse a string
func (t *Toolbox) ReverseString(s string) string {
	runes := []rune(s)
	for i, j := 0, len(runes)-1; i < j; i, j = i+1, j-1 {
		runes[i], runes[j] = runes[j], runes[i]
	}
	return string(runes)
}

// Method 4: Calculate factorial of a number
func (t *Toolbox) Factorial(num int) int {
	if num == 0 {
		return 1
	}
	result := 1
	for i := 1; i <= num; i++ {
		result *= i
	}
	return result
}

// Method 5: Generate Fibonacci series up to n
func (t *Toolbox) Fibonacci(n int) []int {
	fibs := []int{0, 1}
	for i := 2; i < n; i++ {
		fibs = append(fibs, fibs[i-1]+fibs[i-2])
	}
	return fibs
}

// Method 6: Count the number of vowels in a string
func (t *Toolbox) CountVowels(s string) int {
	count := 0
	for _, char := range s {
		switch char {
		case 'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U':
			count++
		}
	}
	return count
}

// Method 7: Find maximum in a slice of integers
func (t *Toolbox) FindMax(slice []int) int {
	max := slice[0]
	for _, value := range slice {
		if value > max {
			max = value
		}
	}
	return max
}

// Method 8: Convert a string to uppercase
func (t *Toolbox) ToUpper(s string) string {
	return strings.ToUpper(s)
}

// Method 9: Calculate the sum of a slice of integers
func (t *Toolbox) SumSlice(slice []int) int {
	sum := 0
	for _, num := range slice {
		sum += num
	}
	return sum
}

// Method 10: Check if a string contains a substring
func (t *Toolbox) ContainsStr(haystack, needle string) bool {
	return strings.Contains(haystack, needle)
}

// Method 11: Sort a slice of integers (Bubble Sort)
func (t *Toolbox) BubbleSort(slice []int) []int {
	n := len(slice)
	for i := 0; i < n; i++ {
		for j := 0; j < n-i-1; j++ {
			if slice[j] > slice[j+1] {
				slice[j], slice[j+1] = slice[j+1], slice[j]
			}
		}
	}
	return slice
}

// Method 12: Encrypt data by shifting characters
func (t *Toolbox) Encrypt(data string, shift int) string {
	encrypted := ""
	for _, c := range data {
		if c >= 'a' && c <= 'z' {
			encrypted += string((c-'a'+rune(shift))%26 + 'a')
		} else if c >= 'A' && c <= 'Z' {
			encrypted += string((c-'A'+rune(shift))%26 + 'A')
		} else {
			encrypted += string(c)
		}
	}
	return encrypted
}

// Method 13: Decrypt data by reversing the shift
func (t *Toolbox) Decrypt(data string, shift int) string {
	return t.Encrypt(data, -shift)
}

// Method 14: Append string with a separator
func (t *Toolbox) JoinStrings(elements []string, separator string) string {
	return strings.Join(elements, separator)
}

// Method 15: Check if the data contains any digit
func (t *Toolbox) ContainsDigit(data string) bool {
	for _, c := range data {
		if c >= '0' && c <= '9' {
			return true
		}
	}
	return false
}

func main() {
	tb := Toolbox{"example"}
	fmt.Println("Square of 5:", tb.Square(5))
	fmt.Println("Is 7 Prime?", tb.IsPrime(7))
	fmt.Println("Reverse of 'hello':", tb.ReverseString("hello"))
	fmt.Println("Factorial of 5:", tb.Factorial(5))
	fmt.Println("Fibonacci up to 10:", tb.Fibonacci(10))
	fmt.Println("Count of vowels in 'hello':", tb.CountVowels("hello"))
	fmt.Println("Max of slice:", tb.FindMax([]int{1, 3, 5, 7, 9}))
	fmt.Println("Uppercase of 'hello':", tb.ToUpper("hello"))
	fmt.Println("Sum of slice:", tb.SumSlice([]int{1, 2, 3, 4, 5}))
	fmt.Println("Contains 'he' in 'hello':", tb.ContainsStr("hello", "he"))
	fmt.Println("Bubble sorted slice:", tb.BubbleSort([]int{5, 3, 8, 6, 2}))
	fmt.Println("Encrypted 'hello':", tb.Encrypt("hello", 3))
	fmt.Println("Decrypted back:", tb.Decrypt(tb.Encrypt("hello", 3), 3))
	fmt.Println("Joined string:", tb.JoinStrings([]string{"Hello", "World"}, " "))
	fmt.Println("Contains digit in 'abc1':", tb.ContainsDigit("abc1"))
}
