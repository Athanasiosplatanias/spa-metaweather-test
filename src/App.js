import React from "react"; /*This statement is telling object from package */

import Titles from "./components/Titles.js";

import Form from "./components/Form.js";

import Weather from "./components/Weather.js";

const API_KEY = "https://www.metaweather.com/api/location/(woeid)/";

class App extends React.Component{/*this is creating an instant of app and that instant in extending react in component*/
           state={
            temperature: undefined,
            city: undefined,
            country: undefined,
            humidity: undefined,
            description: undefined,
            error: undefined,
           }



            getWeather = async (e) =>{
            e.preventDefault(); /*this is gonna prevent the default behavior when we press the button */

            const city = e.target.elements.city.value;
            const country = e.target.elements.country.value;
            const api_call = await fetch(`https://www.metaweather.com/api/location/(woeid)/`);

            const data = await api_call.json();

            if (city && country) {/* in this case the user tha fill boxes with city and country  */
            console.log(data);
            this.setState({
                temperature: data.main.temp,
                city: /**i had to put the path here that i will find via inspect ,console */name,
                country: /**i had to put the path here that i will find via inspect ,console */country,
                humidity: /**i had to put the path here that i will find via inspect ,console */humidity,
                description: /**i had to put the path here that i will find via inspect ,console */description,
                error: ""

          


            });
        }
        else {/**in this case when user clicks the button without filling  city and country, gets error message */
            this.setState({
              temperature: undefined,
              city: undefined,
              country: undefined,
              humidity: undefined,
              description: undefined,
              error: "Please enter the values."
            });
          }
        }
        render(){/*is a build in react method/and i can only return only one parent element*/
        return(
            <div>
            <Titles />
            <Form getWeather={this.getWeather}/>
            <Weather
            
            temperature={this.state.temperature} 
            humidity={this.state.humidity}
            city={this.state.city}
            country={this.state.country}
            description={this.state.description}
            error={this.state.error}
            
            
            />
            </div>
        );
        }

};




export default App;