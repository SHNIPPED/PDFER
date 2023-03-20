import React, { useState, useCallback } from 'react'
import jsPDF from 'jspdf'
import './list.css';
import Values from '../Values';

function List({ name, surname, patronomic,PDD,  date, quantum }) {

    let quantumTitle

    const getTitle = useCallback(async (_quantum) => {

        let responces = await fetch(`http://localhost:3300/Quantum/${_quantum}`)
        if (responces.ok) {
            await fetch(`http://localhost:3300/Quantum/${_quantum}`)
                .then(res => res.json())
                .then(
                    (result) => {
                        quantumTitle=result
                    }
                )
        }
    })

    const PDF = async() => {
        PDD({ name, surname, patronomic, date ,quantum})     
        await getTitle(quantum)
        const doc = new jsPDF('landscape')
        var _img = Values.img;
        var Sizes = doc.internal.pageSize;
        var _MyFont = Values.myFont;
        var Sizes = doc.internal.pageSize;
        doc.addFileToVFS("MyFont.ttf", _MyFont);
        doc.addFont("MyFont.ttf", "MyFont", "normal");
        doc.setFont("MyFont");
        doc.addImage(_img, 'PNG', 0, 0, Sizes.getWidth(), Sizes.getHeight());
        doc.setFontSize(23);
        doc.text('Настоящим подтверждается, что', 91, 80)
        doc.text(`${name} ${surname} ${patronomic}`, 148, 95, { align: 'center' })
        doc.text('прошёл обучение по направлению', 89, 110)
        doc.text(`${quantumTitle.Title}`,89,125)
        doc.text(`в объёме 64 часа`,149,140, { align: 'center' })
        doc.setFontSize(15);
        console.log(date.toString());
        var arrayOfStrings = date.split('T');
        doc.text(`${arrayOfStrings[0]}`, 149, 195, { align: 'center' })
        doc.setFontSize(23);
        doc.save("sertificate.pdf")
    }

    if (name === undefined || surname === undefined || patronomic === undefined) {
        return null
    }
    else {
        return (
            <div>
                <ul className="list" >
                    <li className="list-item" >{name + "  " + surname + "  " + patronomic}
                        <button className="list-button" onClick={() => PDF()}>Вывести</button>
                    </li>
                </ul>
            </div>
        );
    }
}

export default List