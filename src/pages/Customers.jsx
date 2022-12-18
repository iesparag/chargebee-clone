import { Heading } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react';
import { Button } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react';

const Customers = () => {
  const[list,setList] = useState([]);
  const getData = async()=>{
    let base = await fetch(`https://chargebee-customers-database.vercel.app/posts`);
    let base2 = await base.json();
    setList(base2)
    console.log(base2)
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <div style={{}} >
      
      <div class="cust1"style={{backgroundColor:"lightgray",padding:" 120px 100px"}} >
      <Heading>Chargebee powers <br/>
      </Heading>
      <Heading> subscriptions for</Heading>
      <Heading>businesses for all sizes.</Heading>
      <Button size='lg' color="orange.500" borderColor="orange.500" borderRadius="0px" border="2px solid" marginTop="50px" variant='outline'>
    Sign up for free
  </Button>
  <Button  color="blue.500" variant='ghost'  marginTop="50px" marginLeft="20px"  >Talk to us!</Button>

      </div>
      <div class="cust2" style={{display:"flex",padding:"60px 100px"}} >
        <div>
          <img style={{transform:"scale(0.6)",position:"left"}} src="https://webstatic.chargebee.com/assets/web/543/images/home/testimonial/cb-study.png" alt="study.com" />
          <Text fontSize='25px' paddingLeft="80px" >... Integration was easy and the <strong style={{fontStyle:"italic"}} >customer<br/>support provided was excellent. </strong> This is huge<br/>considering how deficient many players in the <br/> space are when... </Text>
         <div style={{display:"flex",margin:"50px",alignItems:"center",justifyContent:"space-around"}} >
         <img src="https://webstatic.chargebee.com/assets/web/543/images/case-study/voitek.jpeg" alt="Voitek" style={{width:"50px",borderRadius:"50%",height:"50px",}} />  <label> Voitek Sobieszczanski, Director of Finance &amp; Operations</label>
         </div>
          
        </div>
        <div>
        <img style={{transform:"scale(0.8)",position:"absolute",top:"100px"}} src="https://user-images.githubusercontent.com/107903370/207784031-af0dec8a-2de3-41ea-84e7-0302734fc81d.png" alt="whiteBoard" />
        </div>
      </div>
      <div class="cust3" style={{padding:"100px 100px",display:"flex",justifyContent:"space-evenly"}} >
        <img src="https://webstatic.chargebee.com/assets/web/543/images/customers/logos/freshworks-light-bg.png" alt="freshworks" width="140" style={{height:"30px"}} />
        <img src="https://www.chargebee.com/static/resources/customers/calendly.png" alt="freshworks" width="130"style={{height:"35px"}} />
        <img src="https://webstatic.chargebee.com/assets/web/543/images/customers/logos/linuxacademy-logo.png" alt="freshworks" width="182" style={{height:"40px"}} />
        <img src="https://webstatic.chargebee.com/assets/web/543/images/customers/logos/fujitsu.png" alt="freshworks" width="90" style={{height:"40px"}} />
      </div>

      <div class="cust4" style={{padding:"0px 100px",display:"flex",alignContent:"center"}} >
         <div>
          <img style={{transform:"scale(0.8)"}} src="https://user-images.githubusercontent.com/107903370/207796339-a2fcc3c2-c22d-4b33-bd55-898c2da864cc.png" alt="freshDesk" />
         </div>
         <div style={{paddingTop:"80px"}} >
          <img src="https://www.chargebee.com/static/resources/customers/freedom-logo.png" width="120" alt="freedom" style={{marginBottom:"30px"}} />
          <div style={{width:"400px"}} >
          <Text fontSize='22px'> We didn't have another choice, we never had to choose between Chargebee and another provider. Chargebee was the clear winner.</Text>
          <div style={{display:"flex",margin:"0px",alignItems:"center"}} >
         <img src="https://webstatic.chargebee.com/assets/web/543/images/case-study/freedom-fred.png" alt="Voitek" style={{width:"50px",borderRadius:"50%",height:"50px",margin:"20px"}} />  <label>Fred Stutzman, CEO, Freedom</label>
         </div>
          </div>
         </div>
      </div>

      <div class="cust5" style={{padding:"100px 100px",display:"flex",justifyContent:"space-evenly"}} >
        <img src="https://www.chargebee.com/static/resources/customers/percona.png" alt="percona" width="140" style={{height:"30px"}} />
        <img src="https://www.chargebee.com/static/resources/customers/cosmos.png" alt="cosmos" width="100"style={{height:"35px"}} />
        <img src="https://www.chargebee.com/static/resources/customers/freedom-logo.png" alt="freshworks" width="182" style={{height:"40px"}} />
        <img src="https://www.chargebee.com/static/resources/customers/crew.svg" alt="freshworks" width="90" style={{height:"40px"}} />
        <img src="https://www.chargebee.com/static/resources/customers/gigwell.png" width="150" alt="gigwell" />
      </div>
      <div class="cust6" style={{margin:"auto",display:"flex",justifyContent:"center"}} >
      
        <iframe width="760" height="455" src="https://www.youtube.com/embed/R9XgyoLQ9qw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="cust7" style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"20px",padding:"100px 300px", hover:"cursor:pointer" }} >
        {list.map((el)=>{
          return<div key={el.id} style={{boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",padding:"20px",borderRadius:"5px",height:"220px"}} >
            <img src={el.source} alt={el.id} style={{width:"200px",margin:"15px"}} />
            <div  style={{width:"400px",margin:"15px"}} > <Text fontSize='18px' color='navyBlue' as="lb" style={{}} > {el.text} </Text> </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default Customers