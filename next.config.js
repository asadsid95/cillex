/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "mango.blender.org",
      "uhdtv.io",
      "upload.wikimedia.org",
      "download.blender.org",
    ],
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "mango.blender.org",
    //     port: "",
    //   },
    //   {
    //     protocol: "https",
    //     hostname: "uhdtv.io",
    //     port: "",
    //   },
    //   {
    //     protocol: "https",
    //     hostname: "upload.wikimedia.org",
    //     port: "",
    //   },
    //   {
    //     protocol: "https",
    //     hostname: "download.blender.org",
    //     port: "",
    //   },
    // ],
  },
};

module.exports = nextConfig;
