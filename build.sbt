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

requireJsShim += "common.js"

requireJs += "app/pictures.js"

requireJs += "app/index.js"
