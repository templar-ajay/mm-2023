export const aboutPageData = {
  _type: "aboutPage",
  introduction: {
    _type: "introduction",
    heading: "intro heading",
    subheading: "intro sub-heading"
  },
  numeralHighlight: [
    {
      numericalValue: "420k",
      context: "followers"
    },
    {
      numericalValue: "5200k",
      context: "github stars"
    }
  ],
  socialLinks: [
    {
      socialLinkPlaceholder: "github",
      socialUrl: "github.com/sunny-unik",
      socialIcon: {
        _type: "image",
        asset: {
          _type: "sanity.imageAsset",
          assetId: "asset-id",
          extension: "asset extension",
          metadata: "SanityImageMetadata",
          mimeType: "asset mimeType",
          originalFilename: "github.svg",
          path: "/logos/github.svg",
          sha1hash: "nah",
          size: 45,
          uploadId: "none",
          url: "/logos/github.svg"
        },
        crop: "SanityImageCrop",
        hotspot: "SanityImageHotspot"
      }
    }
  ],
  services: [
    {
      serviceName: "sup service",
      serviceUrl: "github.com/service",
      serviceDescription: "this service do nothing"
    },
    {
      serviceName: "sup service second",
      serviceUrl: "github.com/service",
      serviceDescription: "this service also do nothing but its second"
    },
    {
      serviceName: "sup service third",
      serviceUrl: "github.com/service",
      serviceDescription:
        "this service do nothing and its third & longggggggggggggggggggggggggggggggggg"
    }
  ]
};
