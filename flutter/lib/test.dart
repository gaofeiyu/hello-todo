main() {
  List mylist = [1, 3, 4];
  var newList = mylist.map((value) => value + 1);

  print(newList.toList());

  String printUserInfo(String username, {int age, String sex = '男'}) {
    if (age != null) {
      return "$username -- sex: $sex $age";
    }
    return "$username";
  }

  print(printUserInfo('张三', sex: '女', age: 20));
}
