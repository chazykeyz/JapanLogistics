import React from "react";

const Wild = () => {
  const Widget = ({ icon, title, content }) => {
    return (
      <div className="relative overflow-hidden p-2">
        <div>
          <div
            className="rounded-xl bg-blue-500 w-full overflow-hidden flex items-center justify-center bg-opacity-10"
            style={{ height: 200 }}
          >
            <img src={icon} alt="about" />
          </div>
          <div className=" text-xl font-bold pt-5 pb-2">{title}</div>
          <div className="text-xs" align="justify">
            {content}
          </div>
        </div>
      </div>
    );
  };
  return (
    <div
      id="wild"
      style={{
        padding: "20px 0 30px",
        background: "white",
      }}
      className="flex items-center flex-col px-3 w-screen"
    >
      {/*push  message */}

      <div className="font-1 text-3xl pb-4 text-gray-400">
        Wildlife Safari & Tour
      </div>
      <div className="flex py-8 flex-col  items-center">
        <div className="grid grid-cols-1 w-screen  lg:grid-cols-3 lg:w-3/4  px-2 lg:px-0">
          <Widget
            icon="https://images.unsplash.com/photo-1543337280-0a85de23072f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHB1YmxpYyUyMHRyYW5zcG9ydGF0aW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            title="Wildlife Safaris"
            content="This safari begins and ends in Dar es Salaam. 4×4 Land Cruiser and Land Rover are used for this safari. Safari in brief: Dar es Salaam Ruaha National Park Udzungwa National Park Mikumi National Park Selous Game Reserves"
          />
          <Widget
            icon="https://images.unsplash.com/photo-1586206670130-4c6d8e646c9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dHJhbnNwb3J0YXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
            title="Cargo Transportation"
            number="2"
            content="Your Cargo need to be Transported in Secured and Safety, and it should be delivery fast and on time, that’s why we are here to ensure that happen in Very Highly professional manner since we have most Qualified drivers and Staffs for that specific task."
          />
          <Widget
            icon="https://images.unsplash.com/photo-1623743424601-12be3807f99b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFmcmljYSUyMHdpbGQlMjB0b3VyaXNtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            title="Wildlife Safari and Tour"
            number="3"
            content="To ensure the enjoyment in tourism sector we are also providing the most Amazing experience tour and safari for our clients…more details on Safari page."
          />
          <Widget
            icon="https://images.unsplash.com/photo-1538964173425-93884d739596?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
            title="Beach Holidays"
            number="4"
            content="On the very eastern side of Africa, in the tropical belt, just below the equator, Tanzania, Zanzibar and the other islands along the coast are blessed with year-round sunshine and a balmy climate of around 30 degrees centigrade. At around a couple of hours flying time for the northern parks of Tanzania and a mere 45 minutes from the southern parks, it is understandable why Tanzania’s rise to safari and beach fame has been so meteoric…it is in a truly privileged position out of any African country!"
          />
          <Widget
            icon="https://images.unsplash.com/photo-1578575436955-ef29da568c6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            title="Air Tickets and Boat Tickets"
            number="5"
            content="On the Other hand, people need to book tickets in a very fast way and accurately, guess what…we are here for that too! We can facilitate your travel from the very beginning. Yes, we Got you!"
          />
          <Widget
            icon="../product.jpeg"
            title="Products and Supply"
            number="6"
            content="We are also providing Food Product services to make sure our clients Are Health and recover their Smile. Our Food Products are Such as Wheat, Maize Flour, Rice etc."
          />
        </div>
      </div>
    </div>
  );
};

export default Wild;
