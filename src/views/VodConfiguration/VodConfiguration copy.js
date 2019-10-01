import React, { Component } from "react";
import Services from "../../Services/Services";
import Form from "react-jsonschema-form";
import 'bootstrap/dist/css/bootstrap.min.css';



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
          title: "Section Name",
          type: "array",
          items: {
            title: "Strips",
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
  render() {
    return (
      <Form
        schema={this.schemaBase}
        onSubmit={this.onSubmit}
      //onError={this.log("errors")}
      />
    );
  }
}
