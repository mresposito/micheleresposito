name := "micheleresposito"

version := "1.0-SNAPSHOT"

libraryDependencies ++= Seq(
  jdbc,
  anorm,
  cache
)     

play.Project.playScalaSettings

// requireJsFolder := "js"
//
// requireJs += "pictures.js"
//
// requireJsShim += "pictures.js"
