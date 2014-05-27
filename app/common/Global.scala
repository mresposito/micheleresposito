import play.api._
import play.api.mvc._
import play.filters.gzip.GzipFilter

object GzipFilters {

  def images = new GzipFilter(shouldGzip = (request, response) =>
    response.headers.get("Content-Type").exists(_.startsWith("image/jpeg")))
}

object Global extends WithFilters(GzipFilters.images) with GlobalSettings {

}
