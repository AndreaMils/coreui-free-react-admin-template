import React, { Component } from "react";
import Services from "../../Services/Services";
import Form from "react-jsonschema-form";
import './VodConfiguration.scss'
//import { Button } from 'reactstrap';

export default class FormGeneratorCustom extends Component {
  service = new Services();

  schemaBase = {
    title: "VodConfiguration",
    type: "object",
    required: [],
    properties: {
      config: {
        title: "Config",
        type: "array",
        items: {
          type: "object",
          properties: {
            sectionName: { title: "Section Name", type: "string" },
            Strips: {
              title: "Strips",
              type: "array",
              items: {
                type: "object",
                properties: {
                  stringName: { type: "string", title: "String Name" },
                  position: { type: "number", title: "Position" },
                  isEvidence: { type: "boolean", title: "Is Evidence" },
                  stripQuery: { type: "string", title: "Strip Query" }
                }
              }
            }
          }
        }
      }

      // items: {
      //   title: "Section Name",
      //   type: "array",
      //   items: {
      //     element: {
      //       type: "string",
      //       default: "Prova "
      //     },
      //     element: {
      //       type: "string",
      //       default: "Prova "
      //     },
      //     element: {
      //       type: "string",
      //       default: "Prova "
      //     }
      //   }
      // }
    }
  };

  // onSubmit = event => {
  //   event.preventDefault();
  //   let appsettingsmodel = this.state;
  //   console.log(appsettingsmodel);
  //   this.service.exportToJson(JSON.stringify(appsettingsmodel));
  // };
  log = type => console.log.bind(console, type);
  onSubmit = ({ formData, e }) => {
    this.service.exportToJson(JSON.stringify(formData));

  };
  // render() {
  //   return (
  //     <Form
  //       schema={this.schemaBase}
  //       onSubmit={this.onSubmit}
  //     //onError={this.log("errors")}
  //     />
  //   );
  // }

  ObjectFieldTemplate(props) {
    return (
      <div>
        {props.title}
        {props.description}
        {props.properties.map((element, index) =>
          <div key={index}>
            <div style={{ margin: '10px' }} className="property-wrapper">{element.content}</div>
          </div>
        )}
      </div>
    );
  }

  // ArrayFieldTemplate(props) {
  //   return (
  //     <div>
  //       {props.items.map(element => element.children)}
  //       {<button type='button' style={{ fontSize: '24px' }} onClick={props.onAddClick} >Add{props.title}</button>}
  //     </div>
  //   );
  // }

  uiSchema = {
    "ui:options": {
      removable: true
    }
  };

  render() {
    return (
      <Form schema={this.schemaBase}
        ObjectFieldTemplate={this.ObjectFieldTemplate}
        // ArrayFieldTemplate={this.ArrayFieldTemplate}
        uiSchema={this.uiSchema}

      >
        {/* <button type="reset" style={{ fontSize: "24px" }} >elimina</button>
        <button type="button" style={{ fontSize: "24px" }} >aggiungi</button>
        <button type="submit" style={{ fontSize: "24px" }} >submit</button> */}
      </Form >
    )
  }

}
