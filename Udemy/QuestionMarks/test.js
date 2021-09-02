const QuestionsMarks = require('./index');

test('QuestionsMarks function exists', () => {
  expect(QuestionsMarks).toBeDefined();
});

test('QuestionsMarks', () => {
    expect(QuestionsMarks('aa6?9')).toBeFalsy();
});

test('QuestionsMarks', () => {
    expect(QuestionsMarks('acc?7??sss?3rr1??????5?9')).toBeTruthy();
});

test('QuestionsMarks', () => {
    expect(QuestionsMarks('arrb6???4xxbl5???eee5')).toBeTruthy();
});
  