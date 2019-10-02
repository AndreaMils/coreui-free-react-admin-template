import React, { Component } from "react";
import Services from "../../Services/Services";
import Form from "react-jsonschema-form";
import './VodConfiguration.scss'

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
    }
  };

  log = type => console.log.bind(console, type);
  onSubmit = ({ formData, e }) => {
    this.service.exportToJson(JSON.stringify(formData), 'VodConfiguration.json');

  }; s

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
        onSubmit={this.onSubmit}
        uiSchema={this.uiSchema} />
    )
  }

}
