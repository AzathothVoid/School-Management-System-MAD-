import React from 'react';
import { DataTable } from 'react-native-paper';

function MarkTable( props ) {
    return (
        <DataTable> 
            <DataTable.Header> 
                <DataTable.Title>Subject</DataTable.Title> 
                <DataTable.Title>First Term</DataTable.Title> 
                <DataTable.Title>Mid Term</DataTable.Title> 
                <DataTable.Title>Final Term</DataTable.Title> 
            </DataTable.Header> 
            
            {props.marks.forEach(element => {
               <DataTable.Row> 
                    <DataTable.Cell>{element.subject}</DataTable.Cell> 
                    <DataTable.Cell>{element.first}</DataTable.Cell> 
                    <DataTable.Cell>{element.mid}</DataTable.Cell> 
                    <DataTable.Cell>{element.final}</DataTable.Cell> 
                </DataTable.Row> 
            })}
            
            {/* <DataTable.Row> 
                <DataTable.Cell>English</DataTable.Cell>  
                <DataTable.Cell>48</DataTable.Cell>  
                <DataTable.Cell>42</DataTable.Cell>  
                <DataTable.Cell>88</DataTable.Cell>  
            </DataTable.Row> 
            <DataTable.Row> 
                <DataTable.Cell>Urdu</DataTable.Cell> 
                <DataTable.Cell>45</DataTable.Cell> 
                <DataTable.Cell>26</DataTable.Cell> 
                <DataTable.Cell>74</DataTable.Cell> 
            </DataTable.Row> 
            <DataTable.Row> 
                <DataTable.Cell>Maths</DataTable.Cell> 
                <DataTable.Cell>35</DataTable.Cell> 
                <DataTable.Cell>20</DataTable.Cell> 
                <DataTable.Cell>75</DataTable.Cell> 
            </DataTable.Row> 
            <DataTable.Row> 
                <DataTable.Cell>General Knowledge</DataTable.Cell> 
                <DataTable.Cell>41</DataTable.Cell> 
                <DataTable.Cell>45</DataTable.Cell> 
                <DataTable.Cell>90</DataTable.Cell> 
            </DataTable.Row> 
            <DataTable.Row> 
                <DataTable.Cell>Social Studies</DataTable.Cell> 
                <DataTable.Cell>41</DataTable.Cell> 
                <DataTable.Cell>45</DataTable.Cell> 
                <DataTable.Cell>90</DataTable.Cell> 
            </DataTable.Row> 
            <DataTable.Row> 
                <DataTable.Cell>Islamiyat</DataTable.Cell> 
                <DataTable.Cell>41</DataTable.Cell> 
                <DataTable.Cell>45</DataTable.Cell> 
                <DataTable.Cell>90</DataTable.Cell> 
            </DataTable.Row> 
            <DataTable.Row> 
                <DataTable.Cell>Computer Part 1</DataTable.Cell> 
                <DataTable.Cell>41</DataTable.Cell> 
                <DataTable.Cell>45</DataTable.Cell> 
                <DataTable.Cell>90</DataTable.Cell> 
            </DataTable.Row> 
            <DataTable.Row> 
                <DataTable.Cell>Computer Part 2</DataTable.Cell> 
                <DataTable.Cell>41</DataTable.Cell> 
                <DataTable.Cell>45</DataTable.Cell> 
                <DataTable.Cell>90</DataTable.Cell> 
            </DataTable.Row> 
            <DataTable.Row> 
                <DataTable.Cell>Quran</DataTable.Cell> 
                <DataTable.Cell>41</DataTable.Cell> 
                <DataTable.Cell>45</DataTable.Cell> 
                <DataTable.Cell>90</DataTable.Cell> 
            </DataTable.Row>  */}
        </DataTable>
    )
}

export default MarkTable