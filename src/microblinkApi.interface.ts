import { Observable } from 'rxjs/internal/Observable'

export interface IMicroblinkApi {
  Recognize(
    recognizers: string | string[],
    imageBase64: string,
    uploadProgress?: EventListener
  ): Observable<any>

  SetAuthorization(authorizationHeader: string): void
  SetExportImages(exportImages: boolean | string | string[]): void
  SetDetectGlare(detectGlare: boolean): void
  SetEndpoint(endpoint: string): void

  TerminateAll(): void

  SetUserId(userId: string): void
  SetIsDataPersistingEnabled(isEnabled: boolean): void
}
