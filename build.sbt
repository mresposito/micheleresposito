name := "micheleresposito"

version := "1.0-SNAPSHOT"

libraryDependencies ++= Seq(
  jdbc,
  anorm,
  cache,
  filters,
  "com.typesafe" %% "scalalogging-slf4j" % "1.0.1"
)     

play.Project.playScalaSettings

// requireJsFolder := "js"
//
// requireJsShim += "common.js"
//
// requireJs += "app/pictures.js"
//
// requireJs += "app/index.js"
