const questions = [
    {
        ques: 'What is the capital of France?',
        options: [
            { ans: 'New York', isTrue: false, mark: 'A.  ' },
            { ans: 'London', isTrue: false, mark: 'B.  ' },
            { ans: 'Paris', isTrue: true, mark: 'C.  ' },
            { ans: 'Dublin', isTrue: false, mark: 'D.  ' },
        ],
    },
    {
        ques: 'Who is CEO of Tesla?',
        options: [
            { ans: 'Jeff Bezos', isTrue: false, mark: 'A.  ' },
            { ans: 'Elon Musk', isTrue: true, mark: 'B.  ' },
            { ans: 'Bill Gates', isTrue: false, mark: 'C.  ' },
            { ans: 'Tony Stark', isTrue: false, mark: 'D.  ' },
        ],
    },
    {
        ques: 'The iPhone was created by which company?',
        options: [
            { ans: 'Apple', isTrue: true, mark: 'A.  ' },
            { ans: 'Intel', isTrue: false, mark: 'B.  ' },
            { ans: 'Amazon', isTrue: false, mark: 'C.  ' },
            { ans: 'Microsoft', isTrue: false, mark: 'D.  ' },
        ],
    },
    {
        ques: 'How many Harry Potter books are there?',
        options: [
            { ans: '1', isTrue: false, mark: 'A.  ' },
            { ans: '4', isTrue: false, mark: 'B.  ' },
            { ans: '6', isTrue: false, mark: 'C.  ' },
            { ans: '7', isTrue: true, mark: 'D.  ' },
        ],
    },
];

export default questions;