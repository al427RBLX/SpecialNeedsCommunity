import java.util.HashMap;
import java.util.Map;

public class SearchSystem {
    private Map<String, Student> students = new HashMap<>();

    public void addStudent(Student student) {
        students.put(student.getName(), student);
    }

    public Student search(String name) {
        for (Map.Entry<String, Student> entry : students.entrySet()) {
            if (entry.getKey().equalsIgnoreCase(name)) {
                return entry.getValue();
            }
        }
        return null; // not found
    }

    public static void main(String[] args) {
        SearchSystem searchSystem = new SearchSystem();

        // Add some students
        searchSystem.addStudent(new Student("John Doe", "1990-01-01", "Male", "123 Main St"));
        searchSystem.addStudent(new Student("Jane Smith", "1992-06-15", "Female", "456 Elm St"));

        // Search for a student
        Student result = searchSystem.search("John Doe");
        if (result != null) {
            System.out.println("Found student: " + result.getName());
        } else {
            System.out.println("Student not found");
        }
    }
}

class Student {
    private String name;
    private String dob;
    private String gender;
    private String address;

    public Student(String name, String dob, String gender, String address) {
        this.name = name;
        this.dob = dob;
        this.gender = gender;
        this.address = address;
    }

    public String getName() {
        return name;
    }
}