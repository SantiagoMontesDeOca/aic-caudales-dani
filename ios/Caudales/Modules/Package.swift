// swift-tools-version: 6.0
// The swift-tools-version declares the minimum version of Swift required to build this package.

import PackageDescription

let package = Package(
    name: "Modules",
    platforms: [
           .iOS(.v17),
           // You can also specify other platforms if needed:
           // .macOS(.v13),
           // .watchOS(.v9),
           // .tvOS(.v16)
       ],
    products: [
        // Products define the executables and libraries a package produces, making them visible to other packages.
        .library(
            name: "Rios",
            targets: ["Rios"]),
        .library(
            name: "AicNetwork",
            targets: ["AicNetwork"]),
    ],
    targets: [
        .target(name: "Rios"),
        .testTarget(
            name: "RiosTests",
            dependencies: [
                "Rios", 
                "AicNetwork"
            ]
        ),
        .target(name: "AicNetwork"),
        .testTarget(
            name: "AicNetworkTests",
            dependencies: ["AicNetwork"]
        )
    ]
)
