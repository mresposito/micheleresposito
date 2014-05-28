name := "micheleresposito"

version := "1.0-SNAPSHOT"

libraryDependencies ++= Seq(
  jdbc,
  anorm,
  cache,
  filters
)     

play.Project.playScalaSettings

requireJsFolder := "js"

requireJs += "pictures.js"

requireJsShim += "pictures.js"
