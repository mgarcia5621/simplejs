let data = [
    {
        name: 'Mateo',
        age: '17'
    },
    {
        name: 'Jenny',
        age: '17'
    },
    {
        name: 'Jonathan',
        age: '17'
    },
    {
        name: 'Ron',
        age: '17'
    },
    {
        name: 'Ronney',
        age: '17'
    },
    {
        name: 'Mom',
        age: '17'
    },
    
];

const info = document.querySelector('#info')

let details = data.map(function(item) {
    return (
        '<div>' + item.name + '</div>'
    )
}) 

info.innerHTML = details.join('\n');