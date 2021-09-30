package student_scores;

public class student_scores{
	
public static void main(String[] args) {
	
int test_score =55;
char grade;

System.out.print("Enter number your test score: ");


if (test_score >= 90  ) {
	grade= 'A';
}

else if (test_score >= 80  ) {
	grade= 'B';
}
else if (test_score >= 70  ) {
	grade= 'C';
}
else if (test_score >= 50  ) {
	grade= 'D';
}

else  {
	grade= 'F';
}

System.out.println("Your test Score is: " + grade);
}
	
}