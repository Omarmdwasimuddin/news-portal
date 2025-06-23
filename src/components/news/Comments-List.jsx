"use client"
import React, {useState} from 'react';
import {Tab, Tabs} from "react-bootstrap";
import CommentForm from "@/components/news/Comment-Form";

const CommentsList = (props) => {
    const [key,setKey]=useState("Comments")
    return (
        <div className="container">
            <Tabs id="controlled-tab-example" activeKey={key} onSelect={(k)=>setKey(k)} className="mb-3">
                <Tab eventKey="Comments" title="Comments">
                    <ul className="list-group bg-transparent list-group-flush">
                        {
                           props.data.map((item,i)=>{
                               return  <li key={i} className="list-group-item bg-transparent">
                                   <h6 className="text-dark">
                                       <i className="bi bi-person-circle"></i> {item['user']['firstName']}
                                   </h6>
                                   <p className="text-secondary">{item['description']}</p>
                               </li>
                           })
                        }
                    </ul>
                </Tab>
                <Tab eventKey="Create" title="Create">
                    <CommentForm postId={props.postId} />
                </Tab>
            </Tabs>
        </div>
    );
};

export default CommentsList;