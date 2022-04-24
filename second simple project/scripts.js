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
        age: '22'
    },
    {
        name: 'Ron ',
        age: '48'
    },
    {
        name: 'Ronney ',
        age: '26'
    },
    {
        name: 'Mom ',
        age: '46'
    },
    
];

const info = document.querySelector('#info')

let details = data.map(function(item) {
    return (
        '<div>' + item.name + '' + 'is ' + item.age + ' years old' +  '</div>'
    )
});

info.innerHTML = details.join('\n');