# API Learning

Este proyecto implementa una API RESTful para gestionar cursos,studiantes,lecciones, proceso de matricula, proceso de lecciones aprobadas y preguntas en una plataforma de aprendizaje en línea.

## Instalación

1. Clona este repositorio en tu máquina local:
2. Instala las dependencias del proyecto:

{
	"info": {
		"_postman_id": "311ed625-1384-4be2-87c7-2e6d068a87b7",
		"name": "E-Learning API",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "6142204",
		"_collection_link": "https://solar-robot-212562.postman.co/workspace/My-Workspace~74510b89-4913-49b9-837f-379c5d00c585/collection/6142204-311ed625-1384-4be2-87c7-2e6d068a87b7?action=share&source=collection_link&creator=6142204"
	},
	"item": [
		{
			"name": "courses",
			"item": [
				{
					"name": "course",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:8050/course",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8050",
							"path": [
								"course"
							]
						}
					},
					"response": []
				},
				{
					"name": "course-by-student",
					"protocolProfileBehavior": {
						"disableBodyPruning": true
					},
					"request": {
						"method": "GET",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"student_id\": \"66339c0d3c608ee71b956c09\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:8050/course/student",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8050",
							"path": [
								"course",
								"student"
							]
						}
					},
					"response": []
				},
				{
					"name": "course",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"name\": \"Algoritmo I\",\n    \"description\": \"Algoritmo I\",\n    \"previousCourseId\": \"663256c1df1ffd81dd77a31b\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:8050/course",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8050",
							"path": [
								"course"
							]
						}
					},
					"response": []
				},
				{
					"name": "course",
					"request": {
						"method": "PUT",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"id\":\"6631cb074514c04d9aa5a9a1\",\n    \"name\": \"Python Experto\",\n    \"description\": \"Python Experto\",\n    \"previousCourseId\": \"6631d91a881b25fd7024c656\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:8050/course",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8050",
							"path": [
								"course"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "lessons",
			"item": [
				{
					"name": "lesson",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"name\": \"Diagrama Flujo Avanzado\",\n    \"description\": \"Diagrama Flujo Avanzado\",\n    \"previousLessonId\": \"6631dab61dec05dc02034bfc\",\n    \"course_id\": \"6631cab00f85fc6947bd257a\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:8050/lesson",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8050",
							"path": [
								"lesson"
							]
						}
					},
					"response": []
				},
				{
					"name": "lession-aproved",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"lession_id\": \"6631d91a881b25fd7024c656\",\n    \"student_id\": \"66339c0d3c608ee71b956c09\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:8050/lesson/aproved",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8050",
							"path": [
								"lesson",
								"aproved"
							]
						}
					},
					"response": []
				},
				{
					"name": "put",
					"request": {
						"method": "PUT",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"id\": \"6631d94d881b25fd7024c659\",\n    \"name\": \"Diagrama Flujo Basico I\",\n    \"description\": \"Diagrama Flujo Basico I\",\n    \"previousLessonId\": \"6631d91a881b25fd7024c656\",\n    \"course_id\": \"6631cab00f85fc6947bd257a\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:8050/lesson",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8050",
							"path": [
								"lesson"
							]
						}
					},
					"response": []
				},
				{
					"name": "lesson",
					"protocolProfileBehavior": {
						"disableBodyPruning": true
					},
					"request": {
						"method": "GET",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:8050/lesson",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8050",
							"path": [
								"lesson"
							]
						}
					},
					"response": []
				},
				{
					"name": "leccion-by-course",
					"protocolProfileBehavior": {
						"disableBodyPruning": true
					},
					"request": {
						"method": "GET",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"course_id\": \"6631cab00f85fc6947bd257a\",\n    \"student_id\": \"66339c0d3c608ee71b956c09\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:8050/lesson/course",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8050",
							"path": [
								"lesson",
								"course"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "answers",
			"item": [
				{
					"name": "post",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"text\": \"¿Cuales son los formatos condicionales en Python ?\",\n    \"type\": \"multiple\",\n    \"lession_id\": \"6631d91a881b25fd7024c656\",\n    \"score\": 5,\n     \"answers\": [\n        { \"text\": \"IF, ELSE, ELSE IF\", \"correct\": true },\n        { \"text\": \"SOL, LUNA\", \"correct\": false }\n    ]\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:8050/answer",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8050",
							"path": [
								"answer"
							]
						}
					},
					"response": []
				},
				{
					"name": "detail_question",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:8050/answer/6631d91a881b25fd7024c656",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8050",
							"path": [
								"answer",
								"6631d91a881b25fd7024c656"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "student",
			"item": [
				{
					"name": "post",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"name\": \"Blanca \",\n    \"first_name\": \"Aller\",\n    \"last_name\": \"Isuiza\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:8050/student",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8050",
							"path": [
								"student"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "matriculations",
			"item": [
				{
					"name": "post",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"course_id\": \"6631cab00f85fc6947bd257a\",\n    \"student_id\": \"6634021a5c4e176b45aa5870\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:8050/matriculation",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8050",
							"path": [
								"matriculation"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "process_answers",
			"item": [
				{
					"name": "pos",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"lession_id\": \"6631d91a881b25fd7024c656\",\n    \"student_id\": \"66339c0d3c608ee71b956c09\",\n    \"type\": \"examen\",\n    \"lessions\": [\n        {\n            \"text\": \"¿Que es Python ?\",\n            \"type\": \"option1\",\n            \"answers\": [\n                {\n                    \"text\": \"Un Lenguaje de Programacion\",\n                    \"response\": true\n                },\n                {\n                    \"text\": \"Una Ciudad\",\n                    \"response\": false\n                }\n            ]\n        },\n        {\n            \"text\": \"¿Creado Python ?\",\n            \"type\": \"option2\",\n            \"answers\": [\n                {\n                    \"text\": \"Rafael Guevara\",\n                    \"response\": false\n                },\n                {\n                    \"text\": \"Guido van Rossum\",\n                    \"response\": true\n                }\n            ]\n        },\n         {\n            \"text\": \"¿Cuales son los formatos condicionales en Python ?\",\n             \"type\": \"option2\",\n            \"answers\": [\n                {\n                    \"text\": \"IF, ELSE, ELSE IF\",\n                    \"response\": true\n                },\n                {\n                    \"text\": \"SOL, LUNA\",\n                    \"response\": true\n                }\n            ]\n        }\n    ]\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:8050/answer/process/student",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8050",
							"path": [
								"answer",
								"process",
								"student"
							]
						}
					},
					"response": []
				}
			]
		}
	]
}