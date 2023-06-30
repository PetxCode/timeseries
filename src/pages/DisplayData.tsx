import React, { useState, useEffect } from 'react'
import { iData } from '../utils/interfaces'
import { readTask } from '../utils/APIs'
import { styled } from 'styled-components'
import moment from "moment"

const DisplayData = () => {
    const [state, setState] = useState<iData[]>([])


    useEffect(() => {

        readTask().then((res: iData[]) => {

            return setState(res)
        })

    }, [])

    return (
        <div>
            <Container>
                <Main>


                    {
                        state?.map((props: iData, i: number) => (
                            <CardHolder ff={i % 2 === 0 ? "e" : ""} >
                                <Card ff={i % 2 === 0 ? "e" : ""} >
                                    <Top>{props.task}: {moment(props.time).fromNow()}</Top>
                                    <Bottom>
                                        <BB>
                                            <Icons>I</Icons>
                                            <span>NUC 208</span>
                                        </BB>
                                        <TT>
                                            <Reaction>3</Reaction>
                                            <Straid>l</Straid>
                                            <Avatar src={props.avatar} />
                                        </TT>
                                    </Bottom>
                                </Card>
                                <Holder ff={i % 2 === 0 ? "e" : ""} >
                                    <Dot />
                                    <Line />
                                </Holder>
                            </CardHolder>
                        ))
                    }
                    {/* 
                    <CardHolder>
                        <Card>Card</Card>
                        <Holder>
                            <Dot />
                            <Line />
                        </Holder>
                    </CardHolder>

                    <CardHolder ff="i" >
                        <Card ff="i">Card</Card>
                        <Holder ff="i">
                            <Dot />
                            <Line />
                        </Holder>
                    </CardHolder>
                    <CardHolder>
                        <Card>Card</Card>
                        <Holder>
                            <Dot />
                            <Line />
                        </Holder>
                    </CardHolder>

                    <CardHolder ff="i" >
                        <Card ff="i">Card</Card>
                        <Holder ff="i">
                            <Dot />
                            <Line />
                        </Holder>
                    </CardHolder>
 */}


                </Main>
            </Container>
        </div>
    )
}

export default DisplayData

const Avatar = styled.img`
width: 25px;
object-fit:cover;
height: 25px;
border-radius: 50%;
background-color: darkorange;
margin-left: 5px;
`

const Reaction = styled.div`
margin-right: 5px;
`

const Icons = styled.div`
padding: 5px 14px;
background-color: lightgreen;
margin-right: 5px;
border-radius:2px;
`

const Straid = styled.div``

const TT = styled.div`
display:flex;
align-items:center

`

const BB = styled.div`
display:flex;
align-items:center;

span{
    font-size: 11px;
    font-weight: 600
}
`

const Bottom = styled.div`
display:flex;
justify-content: space-between;
`

const Top = styled.div`
flex:1
`

const Line = styled.div`
width: 5px;
height: 130px;
background-color: lightgreen;

`

const Dot = styled.div`
width: 15px;
height: 15px;
background-color:lightgreen;
border-radius:50%
`

const Holder = styled.div<{ ff?: string }>`
margin-left: 5px;
display:flex;
flex-direction: column;
align-items: center;
/* margin-top:130px; */
margin-top: ${({ ff }) => ff ? "0" : "135px"};


`

const Card = styled.div<{ ff?: string }>`
width: 290px;
height: 120px;
border: 1px solid silver;
border-radius:5px;
padding: 5px;
margin-top: ${({ ff }) => ff ? "-135px" : "0px"};
display: flex;
flex-direction: column;
`

const CardHolder = styled.div<{ ff?: string }>`
display: flex;
align-items: center;
flex-direction: ${({ ff }) => ff ? "row" : "row-reverse"};
margin-left: ${({ ff }) => ff ? "0" : "603px"};
margin-top: ${({ ff }) => ff ? "0" : "-135px"};


`

const Main = styled.div`
display:flex;
align-items: center;
flex-direction: column;
margin-top: 100px;

`

const Container = styled.div`
width: 100%;
height: calc(100vh - 80px);
display:flex;
justify-content: center;
`