import React, { Component } from "react";
import Services from "../../Services/Services";
import Form from "react-jsonschema-form";

export default class FormGeneratorCustom extends Component {
  service = new Services();
  schemaBase = {
    title: "Vod Configuration",
    type: "object",
    required: [],
    properties: {
      configuration: {
        title: "Configuration",
        type: "object",
        required: [],
        properties: {
          config: {
            title: "Config",
            type: "object",
            required: [],
            properties: {
              sectionName: { type: "string", title: "Section Name" },
              section: {
                title: "section",
                type: "object",
                required: [],
                properties: {
                  strips: {
                    title: "strips",
                    type: "object",
                    required: [],
                    properties: {
                      stripContent1: {
                        title: "Evidence",
                        type: "object",
                        required: [],
                        properties: {
                          stripName: { type: "string", title: "Strip Name" },
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
          }
        }
      }
    },


    type: "array",
    title: "config",
    items: {
      type: "array",
      title: "section",
      items: {
        type: "object",
        default: {
          stripName: { title: "stripName", type: "string", default: "ciao" },
          position: { title: "position", type: "number", default: "ciao" },
          isEvidence: { title: "esEvidence", type: "boolean", default: "ciao" },
          stripQuery: { title: "stripQuery", type: "string", default: "ciao" }
        }
      }
    }



    // type: "object",
    // properties: {
    //   config: {
    //     type: "array",
    //     title: "config",
    //     items: {
    //       type: "array",
    //       title: "test",
    //       default: {
    //         stripName: { title: "stripName", type: "string", title: "Strip Name" },
    //         position: { title: "position", type: "number", title: "Position" },
    //         isEvidence: { title: "esEvidence", type: "boolean", title: "Is Evidence" },
    //         stripQuery: { title: "stripQuery", type: "string", title: "Strip Query" }
    //       }
    //     }
    //   }
    // }
  }





  log = (type) => console.log.bind(console, type);
  onSubmit = ({ formData, e }) => {
    this.service.exportToJson(JSON.stringify(formData))
  };

  render() {
    return (
      <Form schema={this.schemaBase}

        onSubmit={this.onSubmit}
      //onError={this.log("errors")} 
      />
    )
  }
};

