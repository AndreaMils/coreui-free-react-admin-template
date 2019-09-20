import React, { Component } from "react";
import Services from "../../Services/Services";
import Form from "react-jsonschema-form";

export default class FormGeneratorCustom extends Component {
  service = new Services();

  schemaBase = {
    title: "App Settings",
    type: "object",
    required: ["base_url", "pages_path", "layout_path", "events_path", "laucher_path"],
    properties: {
      base_url: { type: "string", title: "Base url" },
      pages_path: { type: "string", title: "Pages Path" },
      layout_path: { type: "string", title: "Layout Path" },
      events_path: { type: "string", title: "Events Path" },
      laucher_path: { type: "string", title: "Launcher Path" },
      platform: {
        title: "Platform",
        type: "object",
        required: ["epg", "vod", "linearADV", "videoADV"],
        properties: {
          epg: { type: "string", title: "Epg" },
          vod: { type: "string", title: "Vod" },
          linearADV: { type: "string", title: "Linear ADV" },
          videoADV: { type: "string", title: "Video ADV" },
        }
      },
      hbbtv_configuration: {
        title: "Hbbtv Configuration",
        type: "object",
        required: ["broadcastVideoElement", "carouselID", "streamEventObject"],
        properties: {
          broadcastVideoElement: { type: "string", title: "Broadcast Video Element" },
          carouselID: { type: "number", title: "Carousel ID" },
          streamEventObject: { type: "string", title: "Stream Event Object" },
        }
      },
      defaults: {
        title: "Defaults",
        type: "object",
        required: ["lancher", "events"],
        properties: {
          lancher: { type: "string", title: "Launcher" },
          events: { type: "string", title: "Events" }
        }
      },
      advertisingConfigurationSchema: {
        title: "Advertising Configuration",
        type: "object",
        required: ["linearAdvEnabled", "videoAdvEnabled", "preroll", "midroll", "postroll",
          "linearAdvApplication"],
        properties: {
          linearAdvEnabled: { type: "boolean", title: "Linear ADV Enabled", default: false },
          videoAdvEnabled: { type: "boolean", title: "Video Adv Enabled", default: false },
          preroll: { type: "boolean", title: "Preroll", default: false },
          midroll: { type: "boolean", title: "Midroll", default: false },
          postroll: { type: "boolean", title: "Postroll", default: false },
          linearAdvApplication: { type: "string", title: "Linear Adv Application" },
          linearAdvDemoConfig: {
            title: "Linear Adv Demo Config",
            type: "object",
            required: [],
            properties: {
              cornerBanner: {
                title: "Corner Banner",
                type: "object",
                required: ["campaignId", "streamEvent"],
                properties: {
                  campaignId: { type: "number", title: "Campaign Id" },
                  streamEvent: { type: "string", title: "Stream Event" }
                }

              },
              lsShapeBanner: {
                title: "Ls Shape Banner",
                type: "object",
                required: ["campaignId", "streamEvent"],
                properties: {
                  campaignId: { type: "number", title: "Campaign Id" },
                  streamEvent: { type: "string", title: "Stream Event" }
                }

              },
              stripeBanner: {
                title: "Stripe Banner",
                type: "object",
                required: ["campaignId", "streamEvent"],
                properties: {
                  campaignId: { type: "number", title: "Campaign Id" },
                  streamEvent: { type: "string", title: "Stream Event" }
                }
              }
            }
          }
        }
      },
      not_mandatory: {
        title: "",
        type: "object",
        required: [],
        properties: {
          launchers: { type: "string", title: "Launchers" },
          events: { type: "string", title: "Events" },
          deviceEvents: { type: "string", title: "Device Events" },
          playerFallback: { type: "string", title: "Player Fallback" }
        }
      }
    }
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

