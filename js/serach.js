import java.util.Scanner;

public class SearchSystem {
    public static void main(String[] args) {
        String[] data = {"apple", "banana", "cherry", "date", "elderberry"};
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a keyword to search: ");
        String keyword = scanner.nextLine();

        boolean found = false;
        for (String item : data) {
            if (item.equalsIgnoreCase(keyword)) {
                found = true;
                System.out.println("Found: " + item);
                break;
            }
        }

        if (!found) {
            System.out.println("Item not found.");
        }

        scanner.close();
    }
}
