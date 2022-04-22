let data = [
    {
        name: 'Mateo ',
        age: '17'
    },
    {
        name: 'Jenny ',
        age: '21'
    },
    {
        name: 'Jonathan ',
        age: '22 I think'
    },
    {
        name: 'Ron ',
        age: '48 maybe'
    },
    {
        name: 'Ronney ',
        age: '26'
    },
    {
        name: 'Mom ',
        age: '46 I think, she young'
    },
    
];

const info = document.querySelector('#info')

let details = data.map(function(item) {
    return (
        '<div>' + item.name + item.age + '</div>'
    )
});

info.innerHTML = details.join('\n');