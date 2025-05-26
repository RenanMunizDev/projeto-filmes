# Etapa de build
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /app

COPY ./FilmesApi.csproj ./
RUN dotnet restore FilmesApi.csproj

COPY . .
RUN dotnet publish FilmesApi.csproj -c Release -o out

# Etapa final
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app
COPY --from=build /app/out .
ENTRYPOINT ["dotnet", "FilmesApi.dll"]
