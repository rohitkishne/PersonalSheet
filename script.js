const sheetHeading = document.getElementById('sheet-heading');
const sheetBodyCol = document.getElementById('sheet-body-col');
const sheetBody = document.getElementById('sheet-body');
const boldBtn = document.getElementById('bold')
const italicBtn = document.getElementById('italic')
const underlineBtn = document.getElementById('underline')
const alignLeftBtn = document.getElementById('align-left')
const alignRightBtn = document.getElementById('align-right')
const alignCenterBtn = document.getElementById('align-center')
const alignJustifyBtn = document.getElementById('align-justify')

let currentColumn;
let column = 26;
let rows = 100;

for(let col = 0; col<column; col++)
{
    const heading = document.createElement('th')
    heading.className = 'sheet-heading'
    heading.innerText = String.fromCharCode(col+65);
    sheetHeading.appendChild(heading);
}


for(let row=1; row<=rows; row++)
{
    const sheetRow = document.createElement('tr');
    sheetRow.className = 'sheet-body-col';
    const sheetRowNo = document.createElement('th');
    sheetRowNo.innerText = row;
    sheetRow.appendChild(sheetRowNo);

    for(let col=0; col<column; col++)
    {
        const sheetColumn = document.createElement('td');
        sheetColumn.className = 'sheet-column'
        sheetColumn.setAttribute('contenteditable', true)
        sheetColumn.setAttribute('id', `${String.fromCharCode(col+65)}${row}`);
        sheetColumn.addEventListener('focus', (event) => focusOnColumn(event));
        sheetRow.appendChild(sheetColumn);
    }

    sheetBody.appendChild(sheetRow);
}

function focusOnColumn(event) {
    currentColumn = event.target;
    document.getElementById('current-Col-Row').innerText = currentColumn.id;
}

boldBtn.addEventListener('click', () =>{
    if(currentColumn.style.fontWeight === 'bold')
    {
        currentColumn.style.fontWeight = 'normal';
    }
    else{
        currentColumn.style.fontWeight = 'bold';
    }
})

italicBtn.addEventListener('click', () =>{
    if(currentColumn.style.fontStyle === 'italic')
    {
        currentColumn.style.fontStyle = 'normal';
    }
    else{
        currentColumn.style.fontStyle = 'italic';
    }
})

underlineBtn.addEventListener('click', () =>{
    if(currentColumn.style.textDecoration === 'underline')
    {
        currentColumn.style.textDecoration = 'none';
    }
    else{
        currentColumn.style.textDecoration = 'underline';
    }
})

alignLeftBtn.addEventListener('click', () =>{
    if(currentColumn.style.textAlign === 'left')
    {
        currentColumn.style.textAlign = 'start';
    }
    else{
        currentColumn.style.textAlign = 'left';
    }
})

alignRightBtn.addEventListener('click', () =>{
    if(currentColumn.style.textAlign === 'right')
    {
        currentColumn.style.textAlign = 'start';
    }
    else{
        currentColumn.style.textAlign = 'right';
    }
})

alignCenterBtn.addEventListener('click', () =>{
    if(currentColumn.style.textAlign === 'center')
    {
        currentColumn.style.textAlign = 'start';
    }
    else{
        currentColumn.style.textAlign = 'center';
    }
})

alignJustifyBtn.addEventListener('click', () =>{
    if(currentColumn.style.textAlign === 'justify')
    {
        currentColumn.style.textAlign = 'start';
    }
    else{
        currentColumn.style.textAlign = 'justify';
    }
})

